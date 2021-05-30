import React, { Component } from "react";
import rests from "../../sample-restaurants";
import styles from "./styles.module.scss";

export class Landing extends Component {
  state = {
    title: "asd",
    url: "",
  };
  displayList = () => {
    console.log(this.state);
  };

  componentDidMount() {
    console.log(this.state);
  }

  render() {
    return (
      <div className="container">
        <div className={styles.restaraunt__select}>
          <h2 className={styles.rest__select_title}>Выберите ресторан</h2>
          <div className={styles.rest__items}>
            {rests.map((rest) => {
              return (
                <div key={rest.id} className="rest__item">
                  {rest.title}
                </div>
              );
            })}
          </div>

          <button onClick={this.displayList} className={styles.rest__button}>
            Выбрать
          </button>
        </div>
      </div>
    );
  }
}

export default Landing;
