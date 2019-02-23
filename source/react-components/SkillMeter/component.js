import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Styles from './styles.css';
import { Button } from '../Button';

const SkillMeter = hot(
    class extends Component {
        state = {
            skill: 11,
        };

        inc = () => this.setState(({ skill }) => ({
            skill: skill + 1,
        }));

        dec = () => this.setState(({ skill }) => ({
            skill: skill - 1,
        }));

        render() {
            const { skill } = this.state;

            return (
                <section className = { Styles.skillMeter }>
                    <h1>My Webpack skill: {skill}</h1>
                    {/*<img src = { cat } />*/}
                    <div>
                        <Button
                            text = 'Increment'
                            onClick = { this.inc }
                        />
                        <Button
                            text = 'Decrement'
                            onClick = { this.dec }
                        />
                    </div>
                </section>
            );
        }
    },
);

export default SkillMeter;
