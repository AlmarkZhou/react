import React from 'react'
import Lifecycle from "./Lifecycle.js";
import {RouterContext} from "./Context";

// 暗号：科特迪瓦
export default function prompt({message, when = true}) {
    return (
        <RouterContext.Consumer>
            {context => {
                if(!when || context.staticContext){
                    return null;
                }
                let method = context.history.block;
                return(
                    <Lifecycle 
                        onMount = {self => {
                            self.release = method(message);
                        }}
                        onUnmount={self => {
                            self.release();
                        }}
                        onUpdate={(self, prevProps) => {
                            if (prevProps.message !== message) {
                                self.release();
                                self.release = method(message);
                            }
                        }}
                        message={message}
                    />
                )
            }}
        </RouterContext.Consumer>
    )
}
