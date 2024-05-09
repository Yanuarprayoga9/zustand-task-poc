import "./Task.css"
import PropTypes from "prop-types"

export default function Task({ title }) {
    
    return (
      <div
        className="task"
        draggable
        
      >
        <div>{title}</div>
        <div className="bottomWrapper">
          <div>
            <img src='https://tse2.mm.bing.net/th?id=OIP.gZgBNjtjIRPKngRTawvdxQHaEK&pid=Api&P=0&h=180' />
          </div>
          {/* <div className={classNames('status', task.state)}>{task.state}</div> */}
        </div>
      </div>
    );
  }

  Task.propTypes = {
    title: PropTypes.string
  }