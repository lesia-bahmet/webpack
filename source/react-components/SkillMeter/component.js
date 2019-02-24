import React, { Component } from 'react';
import { hot } from 'react-hot-loader/root';

// Components
import Styles from './styles.css';
import { Button } from '../Button';
import cat from '../../theme/assets/images/cat.jpg';
import reactLogo, {ReactComponent as ReactLogo} from '../../theme/assets/images/react.svg';

console.log('cat ', cat);
console.log('reactLogo ', reactLogo);
console.log('ReactLogo ', ReactLogo);

const SkillMeter = hot(
    class extends Component {
        state = {
            skill: 22,
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
                <section style={{
                    '--heading-font-size': `${skill}px`,
                }} className = { Styles.skillMeter }>
                    <h1>My Webpack skill: {skill}</h1>
                    <img src = { cat } />
                    <img src = { reactLogo } />
                    <ReactLogo width={50} />
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
