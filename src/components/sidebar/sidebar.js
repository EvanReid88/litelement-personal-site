import { LitElement, html, css } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map';
import githubSvg from '../../../resources/icons/github.svg';
import linkedinSvg from '../../../resources/icons/linkedin.svg';

export class Sidebar extends LitElement {

  static get properties() {
    return {
      darkMode: { type: Boolean },
      aboutMe: { type: Object },
      experience: { type: Object },
      projects: { type: Object },
      sideBarMap: { type: Object }
    };
  }

  // TODO capture diagnostics
  // TODO set cookie with style setting
  // TODO import styles from file
  static get styles() {
    return css`
      .sidebar {
        font-family: -apple-system, BlinkMacSystemFont, sans-serif;
        box-shadow: 0px 0px 6px 0px #D2D2D7;
        margin: 0;
        padding: 0;
        width: 200px;
        text-align: center;
        background-color: #F4F4F7;
        position: fixed;
        height: 100%;
        overflow: auto;

        -webkit-transition: all .15s ease, width 0, height 0;
        -ms-transition: all.15s ease, width 0, height 0;
        transition: all .15s ease, width 0, height 0;
      }

      .sidebarDark {
        box-shadow: 0px 0px 6px 0px #161616;
        background-color: #323234;
      }

      .sidebar a {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        margin-top: 30px;
        margin-bottom: 30px;
        border-radius: 10px;
        text-align: center;
        text-decoration: none;
        cursor: pointer;

        -webkit-transition: color .15s ease;
        -ms-transition: color .15s ease;
        transition: color .15s ease;
      } 

      .sidebar p {
        display: block;
        color: #3C4146;
        padding: 5px;
        margin: 10px;
        margin-top: 30px;
        font-size: 20px;
        text-align: center;
        text-decoration: none;

        -webkit-transition: color .15s ease;
        -ms-transition: color .15s ease;
        transition: color .15s ease;
      }

      .sidebarDark p {
        color: #B1B1B2;
      }

      .sidebar hr {
        margin: 10px;
        margin-top: 20px;
        margin-bottom: 20px;
        border: 1px solid;
        border-color: #E3E6E8;

        -webkit-transition: border-color .15s ease;
        -ms-transition: border-color .15s ease;
        transition: border-color .15s ease;
      }

      .sidebarDark hr {
        border-color: #454545;
      }

      .sidebar a.active {
        background-color: #abd1de;
        box-shadow: 0px 0px 2px 0px #D2D2D7;
      }

      .sidebarDark a.active {
        background-color: #42526C;
        box-shadow: 0px 0px 2px 0px #1E1E20;
      }

      .sidebar a:hover:not(.active) {
        background-color: #DDE9EE;
      }

      .sidebarDark a {
        color: #B1B1B2;
      }

      .sidebarDark a:hover:not(.active) {
        background-color: #2D3748;
      }

      @media screen and (max-width: 1100px) {
        .sidebar {
          box-shadow: 0px 1px 6px 0px #E3E6E8;
          position: relative;
        }

        .sidebarDark {
          box-shadow: 0px 0px 6px 0px #161616 !important;
        }

        .sidebar a {
          text-align: center;
          margin-top: 6px;
          margin-bottom: 6px;
        }

        hr {
          display: none !important;
        }
        .sidebarheader {
          display: none !important;
        }
        .iconBar {
          display: none !important;
        }
      }
      
      @media screen and (max-width: 1100px) and (min-width: 700px) {
        .sidebar {
          width: 100%;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        
        .sidebar a {
          width: 150px;
          float: left !important;
          
          margin-left: 16px;
          margin-right: 16px;
        }
      }

      @media screen and (max-width: 700px) {
        .sidebar {
          box-shadow: 0px 1px 6px 0px #E3E6E8;
          width: 100%;
          height: 150px;
          position: relative;
        }

        .sidebar a {
          float: none;
        }

        div.content {margin-left: 0;}
      }

      .iconBar {
        display: inline-flex;
        text-align: center;
      }

      .sidebar .siteIcons {
        width: 25px;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
        filter: invert(79%) sepia(29%) saturate(261%) hue-rotate(149deg) brightness(92%) contrast(84%);    

        -webkit-transition: filter .15s ease;
        -ms-transition: filter .15s ease;
        transition: filter .15s ease;
      }

      .sidebarDark .siteIcons {
        filter: invert(29%) sepia(22%) saturate(683%) hue-rotate(178deg) brightness(97%) contrast(92%);

        -webkit-transition: filter .15s ease;
        -ms-transition: filter .15s ease;
        transition: filter .15s ease;
      }
  `
  }

  constructor() {
    super()
    this.darkMode = false;
  }

  render() {
    return html`
      <div class=${classMap(this.sideBarMap)}>
        <p class="sidebarheader">Evan Reid</p>
        <hr />
        <a id="aboutme" @click=${this.onClick} class=${this.isPageActive("aboutme", "")}>About Me</a>
        <a id="experience" @click=${this.onClick} class=${this.isPageActive("experience")}>Experience</a>
        <a id="projects" @click=${this.onClick} class=${this.isPageActive("projects")}>Projects</a>
        <hr />
        <div class="iconBar">
          <div class="siteIcons">${githubSvg}</div>
          <div class="siteIcons">${linkedinSvg}</div>
        </div>
        <toggle-button 
          class="toggleButton" 
          @toggle-changed="${this.themeChanged}"> 
        </toggle-button>
      </div>
    `
  }

  connectedCallback() {
    super.connectedCallback();
    this.sideBarMap = { sidebar: true, sidebarDark: false }
  }

  onClick(event) {
    this.updatePage(event.target.id)
  }

  isPageActive(...itemNames) {
    const path = window.location.pathname.substr(1);
    let pageActive = false;
    itemNames.forEach((item) => {
      if (path === item) {
        pageActive = true;
      }
    })

    return classMap({ active: pageActive })
  }

  updatePage(activePage) {
     // update document path TODO correct defn - get name from const
     window.history.pushState({}, "test", `/${activePage}`)
     this.dispatchEvent(new CustomEvent("popstate", { composed: true, bubbles: true }))

     this.performUpdate();
  }

  themeChanged(e) {
    this.darkMode = e.detail.darkMode;
    this.sideBarMap = { sidebar: true, sidebarDark: this.darkMode }
  }
}

customElements.define('side-bar', Sidebar);
