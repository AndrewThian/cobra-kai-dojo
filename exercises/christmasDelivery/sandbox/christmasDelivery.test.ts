import { christmasDelivery } from "./christmasDelivery";
import  Elf from "./Elf";
import  ToyMachine  from "./ToyMachine";
import  Sleigh  from "./Sleigh";
import MrsClaus from './MrsClaus';

it("only one elf recieves one present by the toy machine", () => {
  const sl = new Sleigh();

  const elf1 = new Elf(sl);
  const elf2 = new Elf(sl);

  const tm = new ToyMachine();

  tm.addSubscriber(elf1)
  tm.addSubscriber(elf2)

  const present = tm.createNewPresent();

  expect(elf1.getPresent()).toBe(present);
  expect(elf2.getPresent()).toBeUndefined()
})

it("elf passes a present to sleigh", () => {
  const sl = new Sleigh();

  const elf = new Elf(sl);
  const tm = new ToyMachine();

  tm.addSubscriber(elf);
  
  const present = tm.createNewPresent();

  expect(elf.getPresent()).toBe(present);
  expect(sl.presents).toContain(present);
});

it("mrs Claus should take presents from multiple toy machines", () => {
  const mrsClaus = new MrsClaus()
  const sl = new Sleigh();
  
  const tm1 = new ToyMachine();
  const tm2 = new ToyMachine();

  const elf1 = new Elf(sl);
  const elf2 = new Elf(sl);

  tm1.addSubscriber(mrsClaus);
  tm2.addSubscriber(mrsClaus);
  
  mrsClaus.addSubscriber(elf1);
  mrsClaus.addSubscriber(elf2);

  const p1 = tm1.createNewPresent()
  const p2 = tm2.createNewPresent()

  expect(sl.presents).toContain(p1)
  expect(sl.presents).toContain(p2)
})

// describe("")
// it("elves round robin the presents from mrs claus", () => {
//   const mrsClaus = new MrsClaus()
//   const sl = new Sleigh();
  
//   const tm1 = new ToyMachine();
//   const tm2 = new ToyMachine();

//   const elf1 = new Elf(sl);
//   const elf2 = new Elf(sl);
// })