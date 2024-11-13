import EvChargingPointsSimulator from "@components/ev-charging-points-simulator/ev-charging-points-simulator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-lg">
        <EvChargingPointsSimulator />
      </div>
    </div>
  );
}
