import React, { Component, Fragment } from "react";
import random from "lodash.random";
import Button from "../libs/territories-ui/Button";
import Dialog from "../libs/territories-ui/Dialog";
import Dices3d, { DICE_TYPES } from "../libs/react-dice-3d";

const generateRandomDices = () => {
  return [random(1, 6), random(1, 6)];
};

class DiceRoller extends Component {
  state = {
    open: false,
    dices: null
  };

  handleRollDices = () => {
    const dices = generateRandomDices();
    this.setState({ open: true, dices });
    setTimeout(() => {
      this.setState({ open: false, dices: null });
      this.props.onRoll(dices);
    }, 3000);
  };

  render() {
    const { open, dices } = this.state;

    return (
      <Fragment>
        <Button
          size="large"
          color="secondary"
          variant="outlined"
          onClick={this.handleRollDices}
        >
          Roll Dices
        </Button>
        <Dialog open={open}>
          {/* Dice component is mounted again when dialog is open 
          cause of required dice init logic in componentDidMount */}
          {open && (
            <Dices3d
              dices={[
                {
                  type: DICE_TYPES.D6,
                  backColor: "red",
                  fontColor: "white",
                  value: dices[0]
                },
                {
                  type: DICE_TYPES.D6,
                  backColor: "blue",
                  fontColor: "white",
                  value: dices[1]
                }
              ]}
            />
          )}
        </Dialog>
      </Fragment>
    );
  }
}
export default DiceRoller;
