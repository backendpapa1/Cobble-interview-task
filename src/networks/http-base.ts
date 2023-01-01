class HttpBase {
  private url: string = '';
  constructor(url: string) {
    this.url = url;
  }

  get() {
    return new Promise(async (resolve, reject) => {
      try {
        let response = await fetch(this.url);
        let responseJSON = await response.json();
        // console.log(responseJSON)
        resolve(responseJSON);
      } catch (e) {
        reject(e);
      }
    });
  }
}

class HttpBaseBuilder {
  private url: any;

  setUrl(url: string) {
    this.url = url;
    return this;
  }

  build() {
    return new HttpBase(this.url);
  }
}
export default HttpBaseBuilder;
