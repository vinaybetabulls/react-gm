import React, { Component } from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
//import 'normalize.css/normalize.css';
import './home.css';
import ItemsCarousel from 'react-items-carousel';
import range from 'lodash/range';
const content = [
    {
        title: 'Vulputate Mollis Ultricies Fermentum Parturient',
        description:
            'Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras justo odio, dapibus ac facilisis.',
        button: 'Read More',
        image: 'https://i.imgur.com/ZXBtVw7.jpg',
        user: 'Luan Gjokaj',
        userProfile: 'https://i.imgur.com/JSW6mEk.png'
    },
    {
        title: 'Tortor Dapibus Commodo Aenean Quam',
        description:
            'Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec sed odio dui.',
        button: 'Discover',
        image: 'https://i.imgur.com/DCdBXcq.jpg',
        user: 'Erich Behrens',
        userProfile: 'https://i.imgur.com/0Clfnu7.png'
    },
    {
        title: 'Phasellus volutpat metus',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Duis mollis, est non commodo luctus, nisi erat porttitor ligula.',
        button: 'Buy now',
        image: 'https://i.imgur.com/DvmN8Hx.jpg',
        user: 'Bruno Vizovskyy',
        userProfile: 'https://i.imgur.com/4KeKvtH.png'
    }
];

export class Home extends React.Component {
    componentWillMount() {
        this.setState({
            children: [],
            activeItemIndex: 0,
        });

        setTimeout(() => {
            this.setState({
                children: createChildren(20),
            })
        }, 100);
    }

    createChildren = n => range(n).map(i => <div key={i} style={{ height: 200, background: '#333' }}>{i}</div>);

    changeActiveItem = (activeItemIndex) => this.setState({ activeItemIndex });
    render() {
        const {
            activeItemIndex,
            children,
        } = this.state;
        
        return (
            <div>
                <div id="home">
                    <Slider className="slider-wrapper">
                        {content.map((item, index) => (
                            <div
                                key={index}
                                className="slider-content"
                                style={{ background: `url('${item.image}') no-repeat center center` }}
                            >
                                <div className="inner">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                    <button>{item.button}</button>
                                </div>
                                <section>
                                    <img src={item.userProfile} alt={item.user} />
                                    <span>
                                        Posted by <strong>{item.user}</strong>
                                    </span>
                                </section>
                            </div>
                        ))}
                    </Slider>
                </div>
                <div id="advantages">
                    <h1>THE GREATER MARGINS ADVANTAGE</h1>
                    <p>Greater Margins had developed a unique system of investor specific search features that make it fast and easier to find your next investment property</p>
                    <div className="row">
                        <div className="col-md-4">
                            <h4>Value Adder Stars</h4>
                            <p>Greater Margins very own system of property evaluation with investment in mind. Value adder stars show a member property features with potential of higher profits. Square foot for an additional bedroom, higher acreage / double lots, mother in law suites / apartments, garage / outbuildings, central ac / central heat, new repairs, premium finishes</p>

                        </div>
                        <div className="col-md-4">
                            <h4>Profitable calculator on each listing</h4>
                            <p>No more switching between websites to estimate your projected profits on your next investment. Greater Margins supplies you with a profitability calculator on every listing. If the numbers work for you, easily save the private calculations with the listing in with your favorites.</p>

                        </div>
                        <div className="col-md-4">
                            <h4>% Under Market value</h4>
                            <p>Quickly find the listings that are at the lowest % under their after repair value or just feel better about the price you are prepared to pay on your next rental property. Greater Margins makes it simple to see how far below its list price is compared to the properties estimated current value.</p>

                        </div>
                    </div>
                </div>
                <div id="property">
                    
                </div>
            </div>
        );
    }
}
