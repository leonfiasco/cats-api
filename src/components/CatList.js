import React from 'react';
import Cat from './Cat';



const CatList = ({ cats }) => {
    return (
		<div className='container'>
			<div className='row'>
				<div className='col s12'>
					{cats && cats.map((cat, i) => {
						return (
							<Cat
								key={i}
								name={cat.name}
                                image={cat.image}
                                description={cat.description}
                                affection={cat.affection_level}
                                shortLegs={cat.short_legs}
							/>
						);
					})
                    }
				</div>
			</div>
		</div>
	);
 
}

export default CatList
