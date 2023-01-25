/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */

import {LitElement, html, css} from 'lit';
import "@dreamworld/dw-surface"



/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        max-width: 100%;
        margin: 0px;
        height: 100vh;
        background-color: #0000ff2e;
      
      }
      header{
        display: flex;
        background-color: #00bcd4;
        height: 70px;
        width: 100%;
        color: white;
        text-align: left;
        font-size: 25px;
        align-items: center;
        overflow:hidden;
      }

      .body {
        display: flex;
        
      }

      .navigation {
        display: flex;
        height: 100vh;
        width: 260px;
        text-align: center;
        background-color: black;
        color: #ffffffab;
        padding: 40px;
        flex-direction: column;
        }
   

      .sub-header {
        display: flex;
        height: 70px;
        width: 100%;
        background-color: #fbf6f6;
        color: black;
        font-size: 30px;
        flex-direction: column;
        align-items: center;
        flex-direction: row;
        
      }

      dw-icon {
        --dw-icon-color:#ffffffab;
       }
     .name {
        flex: 1;
        padding:70px;
      }
      .company{
        padding:70px;
      }
      .laguage{
      padding:20px;
      }
      .h1{
        flex:1;
        padding:20px;
      }
      .icon {
        margin-right: 8px;
        padding:12px;

        
      }
      .icon dw-icon{
        --dw-icon-color:black;
        
      }
      .dw-icon{
        display:flex;
        align-items: center;
        margin-bottom: 15px;
      }
        .dw-list-item {
        display: flex;
        margin: 0;
        margin-left: 18px;
      }
      .profile{
        padding:20px;

      }
     .profile dw-icon{
        --dw-icon-color:white;
      }
      dw-surface{
        display:flex;
        height: 262px;
        width: 400px;
       margin: 16px 0px 10px 16px;
        margin-top:10px;
        border-radius:5px;
      }
     
      .s1{
        display:flex;
        flex-wrap:wrap;
        position:sticky;
        z-index:1;
        margin-left:24px;
      }
      .s10{
        display:flex;
        flex-wrap:wrap;
        position:sticky;
        z-index:1;
      }
    
      .s10{
        margin-left:16px;
      }
      .s2{
        position:sticky;
        display:flex;
        margin-left:16px;
        margin-top:20px;
        font-size:16px;
        position:sticky;
        z-index:1;
      }
      .s3{
       display:flex;
       flex:1;
       flex-direction:row;
      
      }
      .s4{
        display: flex;
    align-items: center;
    margin-bottom: 8px;
   
    margin-left:17px;
    margin-bottom:50px;
      }
     .s5{
      display: flex;
    align-items: center;
    margin-bottom: 28px;
    font-size:20px;
    margin-left:50px;
}
.s6{
      display: flex;
    align-items: center;
    margin-bottom: 38px;
    font-size:20px;
    margin-left:50px;
}
.s8{
      display: flex;
    align-items: center;
    margin-bottom: 8px;
    font-size:20px;
    margin-left:50px;
}
.s7{
  display:block;
  margin-top:16px;
}
.s9{
  display: flex;
  margin-left:17px;
}
    `;
  }

  static get properties() {
    return {
     
    };
  }

  constructor() {
    super();
 
  }

  render() {
    return html`
    <div class="s2">MY COMPANINES</div>
    <div class="s1">
    <dw-surface elevation="4">
      <div class="s7">
      <div class="s4">Harsh test 1</div>
      <div class="s5">: Professional plan</div>
      <div class="s6">: Plan vaild till 31 oct</div>
      <div class="s8">: Profile icon</div>
      </div>
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    </div>

    <div class="s2">SHARED WITH ME</div>
     <div class="s1">
    <dw-surface elevation="4">
      <div class="s7">
      <div class="s4">Harsh test 1</div>
      <div class="s5">: Professional plan</div>
      <div class="s6">: Plan vaild till 31 oct</div>
      <div class="s8">: Profile icon</div>
      </div>
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    <dw-surface elevation="4">
    </dw-surface>
    </div>

















       <!-- <dw-surface class="header" elevation=6>
        <header>
      
          <div class="company">hisab.co</div>
          <div class="name">Arihant Enterprise</div>
          <div class="laguage">English</div>
          <div class="profile"> <dw-icon name="account_circle" iconFont="FILED" size="38" ></dw-icon></div>
        
        </header>
        </dw-surface>
        <div class="body">
          <div class="navigation">
         
           <div class="dw-icon">
            <mwc-icon name="home" iconFont="FILED"></mwc-icon >   
            <dw-list-item title1="Home"></dw-list-item>
          </div>
           <div class="dw-icon">
            <mwc-icon name="assignment" iconFont="FILED"></mwc-icon >   
            <dw-list-item title1="Statement"></dw-list-item>
          </div>
           <div class="dw-icon">
            <mwc-icon name="list_alt" iconFont="FILED"></mwc-icon > 
             <dw-list-item title1="Invoices"></dw-list-item>
            </div>
           <div class="dw-icon">
            <mwc-icon name="credit_card" iconFont="FILED"></mwc-icon >  
            <dw-list-item title1="Pending transactions"></dw-list-item>
          </div>

           </div>
            
           
           
           <div class="sub-header">
           
          <div class="h1">Statement </div>
          <div class="icon">
            <dw-icon name="refresh" iconFont="FILED" size="28"></dw-icon> 
           <dw-icon name="picture_as_pdf" iconFont="FILED" size="28"></dw-icon>
          </div>
         </div>
       
         </div>
        
        </div>
     
      </div> -->
    
    `;
  }

 
  /**
   * Formats a greeting
   * @param name {string} The name to say "Hello" to
   * @returns {string} A greeting directed at `name`
   */
  sayHello(name) {
    return 
  }
}

window.customElements.define('my-element', MyElement);
