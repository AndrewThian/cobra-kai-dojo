export interface IStation {
  id: string;
  houses: IHouse[];
  stations: IStation[];
  // isEnabled: boolean;
}

export interface IHouse {
  id: string;
}

function getStation(node: IStation, stationId: string): IStation | undefined {
  console.log('getStation', node.id)
  if (node.id === stationId) return node;

  for (let i = 0; i < node.stations.length; i++) {
    const child = node.stations[i];
    const foundNode = getStation(child, stationId);
    if (foundNode) return foundNode;
  }

  return undefined;
}

const isEnabled = (node: IStation): boolean => {
  console.log('isEnabled', node.id)
  if (node.houses.length > 0) return true;
  if (node.houses.length === 0 && node.stations.length === 0) return false;

  for (let i = 0; i < node.stations.length; i++) {
    const child = node.stations[i];
    const enabled = isEnabled(child)
    if (enabled) return true;
  }

  return false;
}

export const powerStations = (
  powerGrid: IStation,
  stationId: string
): boolean => {
  const station = getStation(powerGrid, stationId);
  if (!station) throw new Error(`${stationId} not found`);
  return isEnabled(station);
};
