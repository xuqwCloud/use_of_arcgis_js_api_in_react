import React,{Component} from 'react';
import esriLoader from 'esri-loader';
import './App.css';

class App extends Component{

    state = {

    }

    componentDidMount = () => {
        const _self = this;
        const options = {
            url: 'https://js.arcgis.com/4.14/init.js', // 这里的API地址可以是官网提供的CDN，也可在此配置离线部署的地址
            css: 'https://js.arcgis.com/4.14/esri/themes/light/main.css'
        };

        esriLoader.loadModules([
            "esri/Map",
            "esri/views/MapView"], options) // 传入需要使用的类
            .then(([Map,
                       MapView
                   ]) => {
                // doSomeThing

                let map = new Map({
                    basemap: 'osm'
                });

                let view = new MapView({
                    container: "app",
                    map: map,
                    center: [104.072044,30.663279],
                    zoom: 10
                });

            })
            .catch(err => {
                console.error('地图初始化失败', err);
            })

    }

    render () {
        return (
            <div className='App' id='app'>
            </div>
        )
    }
}

export default App;
