import { norm } from './utils';

export type FernSettings = {
  baseStiffness: number;
  tipStiffness: number;
  length: number;
  leafLength: number;
  leafStart: number;
  restAngles: number[];
};

const GRAVITY = 0.01;
const WIND = 0.007;
const DAMPING = 0.4;

export const useFern = (fernSettings: FernSettings) => {
  const segmentLength = fernSettings.length / fernSettings.restAngles.length;

  let angles = $state(
    Array.from(
      { length: fernSettings.restAngles.length },
      (_, i) => fernSettings.restAngles[i]
    )
  );
  let angularSpeeds: number[] = Array.from({ length: fernSettings.restAngles.length }, (_) => 0);

  let points = $derived.by(() => {
    const points = [{ x: 256, y: 384 }];
    for (let i = 0; i < angles.length; i++) {
      const previousPoint = points[i];
      const angle = angles[i];
      const point = {
        x: previousPoint.x + Math.sin(angle) * segmentLength,
        y: previousPoint.y - Math.cos(angle) * segmentLength
      };
      points.push(point);
    }
    return points;
  });

  let lines = $derived.by(() => {
    const lines = [];
    for (let i = 0; i < points.length - 1; i++) {
      lines.push({ start: points[i], end: points[i + 1] });
    }
    return lines;
  });

  let leafs = $derived(
    lines.slice(fernSettings.leafStart).map((line, index) => {
      const start = {
        x: line.start.x,
        y: line.start.y
      };

      const lineVector = {
        x: line.end.x - line.start.x,
        y: line.end.y - line.start.y
      };
      const lineLength = norm(lineVector);
      const lineDirection = {
        x: lineVector.x / lineLength,
        y: lineVector.y / lineLength
      };

      const sign = index % 2 == 0 ? 1 : -1;

      // (-)PI/2 rotation
      const leafDirection = {
        x: sign * lineDirection.y,
        y: sign * -lineDirection.x
      };

      const leafCount = lines.length - fernSettings.leafStart;

      const indexFactor = ((leafCount - index) / leafCount) ** 0.5; // squareroot shapped
      const leafLength = fernSettings.leafLength * indexFactor;

      const end = {
        x: line.start.x + leafDirection.x * leafLength,
        y: line.start.y + leafDirection.y * leafLength
      };

      const controlPointAngle = -sign * 0.5;

      const controlPointDirection = {
        x:
          leafDirection.x * Math.cos(controlPointAngle) -
          leafDirection.y * Math.sin(controlPointAngle),
        y:
          leafDirection.x * Math.sin(controlPointAngle) +
          leafDirection.y * Math.cos(controlPointAngle)
      };

      const controlPoint = {
        x: line.start.x + controlPointDirection.x * leafLength * 0.8,
        y: line.start.y + controlPointDirection.y * leafLength * 0.8
      };

      return {
        start,
        end,
        controlPoint
      };
    })

  );

  const update = (delta: number, windVectorNorm: number, windAngleFromUp: number) => {
    angles = angles.map((angle, i) => {
      const stiffness =
        fernSettings.baseStiffness +
        (i / fernSettings.restAngles.length) *
        (fernSettings.tipStiffness - fernSettings.baseStiffness);
      const angularStiffness =
        (fernSettings.restAngles[i] - angle) * stiffness - DAMPING * stiffness * angularSpeeds[i];

      const angularGravity = (GRAVITY * Math.cos(Math.PI / 2 - angle)) / segmentLength;

      const windTangentielForce =
        Math.cos(windAngleFromUp - (Math.PI / 2 + angle)) * windVectorNorm * WIND;
      const windAngularForce = windTangentielForce / segmentLength;

      const angularAcceleration = angularStiffness + angularGravity + windAngularForce;

      const newAngle = angle + angularSpeeds[i] * delta;

      angularSpeeds[i] += angularAcceleration * delta;

      return newAngle;
    });
  }

  return {
    update,
    get lines() {
      return lines
    },
    get leafs() {
      return leafs
    }
  }
}
