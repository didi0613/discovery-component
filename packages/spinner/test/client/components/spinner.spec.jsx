/**
 * Client tests
 */
import React from "react";
import { shallow } from "enzyme";

import Spinner from "src/components/spinner";

describe("components/spinner", () => {

  describe("Mounting", () => {

    it("renders correctly with no props", () => {
      const component = shallow(<Spinner />);
      expect(component).to.not.be.null;
    });

    it("renders PAGE overlay correctly", () => {
      const component = shallow(
        <Spinner
          overlay="PAGE"
          className="test"
        >
          <span>content</span>
        </Spinner>
      );

      const testOverlay = component.find(".fullContainerOverlay");
      const testClassName = component.find(".test");

      expect(testOverlay).to.not.be.null;
      expect(testClassName).to.not.be.null;
    });

    it("renders CONTAINER overlay correctly", () => {
      const component = shallow(
        <Spinner
          overlay="CONTAINER"
          className="test"
        >
          <span>content</span>
        </Spinner>
      );

      const testOverlay = component.find(".fullContainerOverlay");
      const testClassName = component.find(".test");

      expect(testOverlay).to.not.be.null;
      expect(testClassName).to.not.be.null;
    });

  });

});
