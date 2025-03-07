"use client"

import React, { Component } from "react";
import { ReactSortable } from "react-sortablejs";

interface BasicClassState {
  list: { id: string; name: string }[];
}

export class BasicClass extends Component<{}, BasicClassState> {
  state: BasicClassState = {
    list: [{ id: "1", name: "shrek" }],
  };
  render() {
    return (
      <ReactSortable
        list={this.state.list}
        setList={(newState) => this.setState({ list: newState })}
      >
        {this.state.list.map((item) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
    );
  }
}