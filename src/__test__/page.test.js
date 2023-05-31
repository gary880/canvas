import { screen, render, cleanup } from "@testing-library/react";

let mockFn = jest.fn(()=>true)

it('mockFn ',()=>{
  expect(mockFn()).toBe(true)
})