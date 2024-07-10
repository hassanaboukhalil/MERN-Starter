#### Adding Global Colors

- open index.css
- create css variables and assign the colors to them

#### Adding New NavLink in the Navbar

- open links.jsx file that is in the utils folder
- add new value to the links array
- open react icons website and choose a suitable icon

#### Title and Favicon

- open the html file and change the title
- [Generate Favicon](https://favicon.io/) and download it, then add it to the public folder

#### Logo

- create it using figma
- you can take the downloaded png image from the favicon website, then upload it to figma, then download it as svg
- open images folder, replace the founded logo.svg file with the new logo.svg file that you created

#### Creating New Page

- create the page in the pages folder
- open App.jsx file, then add the element and path to the router object
- Note : if you don't want the page to have the Navbar and the Footer elements in it (ex: Login Page) do not put it in the children property, add new object to the router array

```jsx
const PageName = () => {
  return (
    <main>
      <section className="container">
        <h1>PageName</h1>
      </section>
    </main>
  );
};

export default PageName;
```
