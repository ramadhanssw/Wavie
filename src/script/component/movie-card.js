class MovieCard extends HTMLElement {
  constructor() {
    super();
    this.shadowDOM = this.attachShadow({ mode: "open" });
  }

  set movie(movie) {
    this._movie = movie;
    this.render();
  }

  render() {
    this.shadowDOM.innerHTML = `
           <style>
               * {
                 margin: 0;
                 padding: 0;
                 box-sizing: border-box;
               }

               :host {
                 width: 25%;
                 display: block;
                 margin: 18px;
                 box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
                 border-radius: 10px;
                 overflow: hidden;
                 color: black;
                 background-color: white;
               }

               .poster {
                 width: 100%;
                 height: 67%;
                 object-fit: cover;
                 object-position: center;
               }

               .info {
                 height: 33%;
                 padding: 2px 20px 20px 20px;
               }
               
               .info > p {
                 margin-top: 10px;
                 overflow: hidden;
                 text-overflow: ellipsis;
                 display: -webkit-box;
                 -webkit-box-orient: vertical;
                 -webkit-line-clamp: 10; 
               }

               .extra-info {
                 margin-top: 10px;
                 display: flex;
                 justify-content: space-between;
               }

               .extra-info > button{
                 flex: left;
                 padding: 5px;
                 background-color: #1F2833;
                 color: white;
                 cursor: pointer;
               }

               .extra-info > button:hover{
                 font-weight: bold;
               }

               .extra-info > p{
                 padding: 8px 5px;
                 font-size: 0.8em;
                 cursor: pointer;
               }

               .extra-info > p:hover{
                 color: #45A29E;
                 text-decoration: underline;
               }

               /* untuk ipad/tablet */
               @media screen and (max-width: 768px) {
                 :host {
                   width: 45%;
                   height: 90%;
                 }

               @media screen and (max-width: 576px) {
                 :host {
                   width: 60%;
                 }
               }
           </style>
           <img class="poster" src="${this._movie.Poster}" alt="Poster Unavailabe">
           <div class="info">
             <p><strong>${this._movie.Title}</strong></p>
             <p>${this._movie.Year}</p>
             <div class="extra-info">
               <button type="submit">Watch Now</button>
               <p>See Detail</p>
             </div>
            </div>
            `;
  }
}

customElements.define("movie-card", MovieCard);
