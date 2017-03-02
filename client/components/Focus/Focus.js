import React from 'react';
import firebaseApp from '../../base';
import styles from './Focus.css';
import classnames from 'classnames';

const database = firebaseApp.database();

class Focus extends React.Component {
  constructor(props) {
    super(props);
  }

  handleInputFocus(event) {
    const db_key = this.props.db_key;
    const user = this.props.user.uid;
    const target = 'focusBody';
    const db_ref = database.ref(`users/${user}/modules/${db_key}/${target}`);
    let newText = event.target.value;

    db_ref.set(newText);

    console.log('YOUR NEW FOCUS IS: ', newText);
  }

  render() {
    let dashboard = this.props.dashboard;
    let db_key = this.props.db_key;
    let focus = dashboard.modules[db_key];

    let collapsed = this.props.collapsed.collapsed;
    let collapsedStyle = classnames(`${styles.height}`, collapsed ? `${styles.collapsedStyle}` : '');

    let focusContentStyle = `${styles.focusStyle} 'card-content`;

    return (
      <div className='focus'>
        <div className='card'>
          <header className='card-header'>
            <div className='card-header-title'>
              <p>FOCUS</p>
            </div>
            <div className="card-header-icon">
              <span className="icon">
                <i onClick={this.props.handleCollapseFunction} className="fa fa-crosshairs" aria-hidden="true"></i>
              </span>
            </div>
          </header>
          <div className={collapsedStyle}>
            <div className='card-content'>
              <div className={styles.focusStyle}>
                <div>
                  <p>WHAT'S YOUR FOCUS?</p>
                </div>
              </div>
              <span className={styles.focusContent}>
                <input className={styles.focusInput}
                        type='text'
                        maxLength='40'
                        defaultValue={focus.focusBody}
                        onBlur={this.handleInputFocus.bind(this)}
                      />
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Focus;