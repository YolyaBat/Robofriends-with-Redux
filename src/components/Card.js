import React from 'react';

const Card = ({ id, name, email }) => {
	return (
		<div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
			<img src={`https://robohash.org/${id}?200x200`} alt='robots' />
			<div>
				<h2 className='tc'>{name}</h2>
				<p className='tc'>{email}</p>
			</div>
		</div>
	);
}
export default Card;
