# Kata: power-stations

Problem statement

Part 1
Suppose we have power stations that are connected in a grid that follows a Directed Acyclic Graph. Houses may be connected directly to any power station.
A power station needs to be Enabled if:
- At least one house is connected directly to the power station.
- A connected child power station requires electricity (is Enabled).
- Otherwise, the power station must be Disabled.
Determine which power stations are Enabled.

Part 1.5
Serializing and deserializing for test cases
Example:


{
  stations: {
    station1: { 
      id: 'station1',
      houses: ['house1', 'house2']
    }
  },
  houses: {
    house1: { id: 'house1' },
    house2: { id: 'house1' }, 
  }
}

Part 2
Existing houses may be disconnected from the grid, and new houses may be added to the grid. Determine which power stations must be Enabled. (edited)
Challenge: can we optimize subsequent queries to O(1)?
