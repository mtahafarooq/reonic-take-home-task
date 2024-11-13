import { ChargePoint } from "../charge-point/charge-point";

export type ChargeInputPayload = {
  chargePoints: ChargePoint[];
  arrivalMultiplier: number;
  consumption: number;
};
