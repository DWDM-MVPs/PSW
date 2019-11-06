import React from 'react';
class Content extends React.Component {
    render() {
        return (
            <div class="content">
                <h1>Top-3 Heróis</h1>
                <div>
                    <div class="galeria">
                        <h3>Batman</h3>
                        <img class="imagem" src="./images/batman.jpg" alt="Batman"></img>
                    </div>
                    <div class="galeria">
                        <h3>Capitão America</h3>
                        <img class="imagem" src="./images/captain.gif" alt="Capitão America"></img>
                    </div>
                    <div class="galeria">
                        <h3>Black Panther</h3>
                        <img class="imagem" src="./images/panther.jpg" alt="Black Panther"></img>
                    </div>
                    <img class="grafico" alt="Grafico" src="./images/grafico.png"></img>
                </div>
            </div>
        );
    }
}
export default Content;
