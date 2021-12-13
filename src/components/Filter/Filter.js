import React from 'react';
import PropTypes from 'prop-types';
import style from './Filter.module.scss';

export default function Filter({ contactName, findByNameHandler }) {
	return (
		<label className={style.filter__label}>
			Find contacts by name
			<input
				className={style.filter__input}
				type="text"
				value={contactName}
				onChange={findByNameHandler}
			/>
		</label>
	);
}

Filter.propTypes = {
	contactName: PropTypes.string.isRequired,
	findByNameHandler: PropTypes.func.isRequired,
};
