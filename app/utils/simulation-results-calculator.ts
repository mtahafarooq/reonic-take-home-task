import { ChargeInputPayload } from "@/types/charge-input-payload/charge-input-payload";
import { ChargePoint } from "@/types/charge-point/charge-point";
import { SimulationData } from "@/types/simulation-data/simulation-data";

export function calculateSimulationResults(
  payload: ChargeInputPayload
): SimulationData {
  const { chargePoints, arrivalMultiplier, consumption } = payload;

  const totalPower = chargePoints.reduce(
    (acc: number, point: ChargePoint) => acc + point.count * point.power,
    0
  );
  const totalEnergy =
    chargePoints.reduce(
      (acc: number, point: ChargePoint) => acc + point.count * consumption,
      0
    ) *
    (arrivalMultiplier / 100);

  return { totalPower, totalEnergy };
}
