export const styles = `
.page-body {
  font-family: -apple-system, BlinkMacSystemFont, sans-serif;
  color: #3C4146;
  display: inline-block;
  margin-top: 50px;
  width: 600px;
  text-align: left;
  overflow-wrap: normal;

  -webkit-transition: background-color .15s ease;
  -ms-transition: background-color .15s ease;
  transition: background-color .15s ease;
}


p {
  font-size: 14px;
  margin-top: -10px;
}

.subHeader {
  color: #90b2bd;
  margin-left: 2px;

  -webkit-transition: color .15s ease;
  -ms-transition: color .15s ease;
  transition: color .15s ease;
}

.section-header {
  display: inline-block;
  height: 30px;
}

.header-icon {
  display: inline-block;
  vertical-align: middle;
}

.header-title {
  display: inline-block;
  vertical-align: middle;
  margin-left: 15px;
}

.short {
  margin-top: -20px;
  margin-left: 0px
}

.description {
  margin-top: -15px;
}

a {
  color: #629AB3;

  -webkit-transition: color .15s ease;
  -ms-transition: color .15s ease;
  transition: color .15s ease;
}

hr {
  margin-top: 30px;
  margin-bottom: 20px;
  border: 1px solid;
  border-color: #E3E6E8;

  -webkit-transition: border-color .15s ease;
  -ms-transition: border-color .15s ease;
  transition: border-color .15s ease;
}

.dark a {
  color: #6A80A4;
}

.dark hr {
  border-color: #353535;
}

.dark .page-body {
  color: #B1B1B2;
}

.dark .subHeader {
  color: #526585;
}

@media screen and (max-width: 1100px) {
  .page-body {
    width: auto;
    max-width: 600px;
    margin-top: 0px;
    margin-left: 20px;
    margin-right: 20px;
  }
}

@media screen and (max-width: 700px) {
  p {
    font-size: 20px;
  }

  h3 {
    font-size: 22px;
  }

  h4 {
    font-size: 20px;
  }

  h5 {
    font-size: 20px;
  }
}`;
