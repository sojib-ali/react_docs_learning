import { Link } from "react-router-dom";
import "../styles/home.css";
import { IoIosArrowDropdown } from "react-icons/io";
import { useState } from "react";
const Lesson_titles = () => {
  const [currentTopic, setCurrentTopic] = useState(null);
  const [currentLesson, setCurrentLesson] = useState(null);
  return (
    <>
      {/* <div className="lessons">
        <h3>Extracting State Logic into a Reducer</h3>
        <Link to="/task-app" className="nav-link">
          Task App
        </Link>
        <Link to="/messenger-with-reducer" className="nav-link">
          Challenge-1: Dispatch actions from event handlers
        </Link>
        <Link to="/context-image-list" className="nav-link">
          Replace prop drilling with context
        </Link>
        <IoIosArrowDropdownCircle />
        
      </div> */}
      {/* -------------------- topic - 2 ---------------------*/}
      <div className="lesson-title">
        <h3>Adding interactivity</h3>
        <span>
          <IoIosArrowDropdown
            onClick={() => {
              setCurrentTopic(currentTopic === 1 ? null : 1);
            }}
          />
        </span>
      </div>
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -2: State: A Component's Memory</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 2 ? null : 2);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 2 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/next-gallery" className="nav-link">
              Next Gallery app
            </Link>
            <Link to="/input-form" className="nav-link">
              Input form
            </Link>
            <Link to="/textarea-msg" className="nav-link">
              Textarea alert message
            </Link>
            <Link to="/alert-input" className="nav-link">
              Alert input
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 3 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -3: Render and commit</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 3 ? null : 3);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 3 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/current-time" className="nav-link">
              current-time
            </Link>
            <Link to="/input-form" className="nav-link">
              Input form
            </Link>
          </div>
        </>
      )}
      {/* -------------------- lesson - 4 ---------------------*/}
      {currentTopic === 1 && (
        <div className="lesson-title">
          <h4>lesson -4: State as a Snapshot</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 4 ? null : 4);
              }}
            />
          </span>
        </div>
      )}
      {currentLesson === 4 && currentTopic === 1 && (
        <>
          <div>
            <Link to="/select-form" className="nav-link">
              select-form
            </Link>
            <Link to="/signal-color" className="nav-link">
              Signal color
            </Link>
          </div>
        </>
      )}

      {/* ---- topic 3--- */}
      <div className="lesson-title">
        <h3>Managing state</h3>
        <span>
          <IoIosArrowDropdown
            onClick={() => {
              setCurrentTopic(currentTopic === 2 ? null : 2);
            }}
          />
        </span>
      </div>
      {currentTopic === 2 && (
        <div className="lesson-title">
          <h4>lesson -1: Reacting to Input with state</h4>
          <span>
            <IoIosArrowDropdown
              onClick={() => {
                setCurrentLesson(currentLesson === 8 ? null : 8);
              }}
            />
          </span>
        </div>
      )}
    </>
  );
};

export default Lesson_titles;
