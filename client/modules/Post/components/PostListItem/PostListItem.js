import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './PostListItem.css';

function PostListItem(props) {
  console.log('props',props);
  return (
    <div className={styles['single-post']}>
      <h3 className={styles['post-title']}>
        <Link to={`/posts/${props.post.slug}-${props.post.cuid}`} >
          {props.post.title}
        </Link>
      </h3>
      <p className={styles['author-name']}><FormattedMessage id="by" /> {props.post.name}</p>
      <p className={styles['post-desc']}>{props.post.content}</p>
      <p className={styles['post-action']}>
        <a href="#" onClick={props.onDelete}><FormattedMessage id="deletePost" /></a>
        <span className={styles['votes-no']}><FormattedMessage id="VOTES" />: {props.post.votes}</span>
        <button className={styles['thumb-up-button']} onClick={props.onThumbUp}><FormattedMessage id="vote" /> +</button>
        <button className={styles['thumb-down-button']} onClick={props.onThumbDown}><FormattedMessage id="vote" /> -</button>
      </p>
      <hr className={styles.divider} />
    </div>
  );
}

PostListItem.propTypes = {
  post: PropTypes.shape({
    name: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    votes: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    cuid: PropTypes.string.isRequired,
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
  onThumbUp: PropTypes.func.isRequired,
  onThumbDown: PropTypes.func.isRequired,
};

export default PostListItem;
