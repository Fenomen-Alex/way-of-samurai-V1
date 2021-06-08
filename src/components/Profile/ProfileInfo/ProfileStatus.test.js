import React from 'react';
import { create } from 'react-test-renderer';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const instance = component.root;
    expect(instance.findByType("span").children.toString()).toBe("it-kamasutra.com");
  });

  test("after creation <span> should be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    expect(() => {
      let input = root.findByType("input");
    }).toThrow();
  });

  test("after creation <span> should contains correct status", () => {
    const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
    const root = component.root;
    let span = root.findByType("span");
    expect(span.children[0]).toBe("it-kamasutra.com");
  });

  // test("input should be displayed in editMode instead of span", () => {
  //   const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" />);
  //   const root = component.root;
  //   let span = root.findByType("span");
  //   span.props.onDoubleClick();
  //   let input = root.findByType("input");
  //   expect(input.props.value).toBe("it-kamasutra.com");
  // });

  // test("callback should be called", () => {
  //   const mockCallback = jest.fn();
  //   const component = create(<ProfileStatusWithHooks status="it-kamasutra.com" updateStatus={mockCallback} />);
  //   const root = component.root;
  //   let input = root.findByType("input");
  //   input.props.onBlur();
  //   expect(mockCallback.mock.calls.length).toBe(1);
  // });


});
