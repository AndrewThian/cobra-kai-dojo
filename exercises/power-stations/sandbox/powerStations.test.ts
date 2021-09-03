import { powerStations, IStation, IHouse } from "./powerStations";

class Station implements IStation {
  type: string;
  houses: IHouse[];
  stations: IStation[];

  constructor(public id: string) {
    this.type = "station";
    this.houses = [];
    this.stations = [];
  }

  connectStation(value:IStation): void {
    this.stations = this.stations.concat(value)
  }
  connectHouse(value: IHouse): void {
    this.houses = this.houses.concat(value)
  }
}

class House implements IHouse {
  constructor(public id: string) { }
}

it("powerStations should return boolean when provided the station id", () => {
  const station1 = new Station("station1");
  const station2 = new Station("station2")
  const station3 = new Station("station3")
  const station4 = new Station("station4")
  station1.connectStation(station2)
  station1.connectStation(station3)
  station2.connectStation(station4)
  station2.connectHouse(new House("house1"))
  station2.connectHouse(new House("house4"))
  station4.connectHouse(new House("house2"))
  station4.connectHouse(new House("house3"))

  expect(powerStations(station1, "station1")).toEqual(true);
  expect(powerStations(station1, "station2")).toEqual(true)
  expect(powerStations(station1, "station3")).toEqual(false)
  expect(powerStations(station1, "station4")).toEqual(true)

});

it("powerStations should return boolean when provided the station id", () => {
  const station1 = new Station("station1");
  const station2 = new Station("station2");
  const station3 = new Station("station3");
  const station4 = new Station("station4");
  station1.stations = [station2, station3];
  station3.stations = [station4]
  station2.houses = [new House("house1")]
  station3.houses = [new House("house4")]
  station4.houses = [new House("house2"), new House("house3")]
  
  expect(powerStations(station1, "station1")).toEqual(true);
  expect(powerStations(station1, "station2")).toEqual(true)
  expect(powerStations(station1, "station3")).toEqual(true)
  expect(powerStations(station1, "station4")).toEqual(true)
});


it("powerStations should return boolean when provided the station id", () => {
  const station1 = new Station("station1");
  const station2 = new Station("station2");
  const station3 = new Station("station3");
  const station4 = new Station("station4");
  station1.connectStation(station2);
  station1.connectStation(station3);
  station3.connectStation(station4);
  station2.connectHouse(new House("house1"));
  station4.connectHouse(new House("house2"))
  station4.connectHouse(new House("house3"))
  
  expect(powerStations(station1, "station1")).toEqual(true);
  expect(powerStations(station1, "station2")).toEqual(true)
  expect(powerStations(station1, "station3")).toEqual(true)
  expect(powerStations(station1, "station4")).toEqual(true)
});

it("powerStations should return boolean when provided the station id", () => {
  const station1 = new Station("station1");
  const station2 = new Station("station2");
  const station3 = new Station("station3");
  const station4 = new Station("station4");
  station1.stations = [station2, station3];
  station3.stations = [station4]
  station4.houses = [new House("house2"), new House("house3")]
  
  expect(powerStations(station1, "station1")).toEqual(true);
  expect(powerStations(station1, "station2")).toEqual(false)
  expect(powerStations(station1, "station3")).toEqual(true)
  expect(powerStations(station1, "station4")).toEqual(true)
});

it("powerStations should return boolean when provided the station id", () => {
  const station1 = new Station("station1");
  const station2 = new Station("station2");
  const station3 = new Station("station3");
  const station4 = new Station("station4");
  station1.stations = [station2, station3];
  station2.stations = [station4]
  
  expect(powerStations(station1, "station1")).toEqual(false);
  expect(powerStations(station1, "station2")).toEqual(false)
  expect(powerStations(station1, "station3")).toEqual(false)
  expect(powerStations(station1, "station4")).toEqual(false)
});