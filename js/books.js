let titleSearchedList = [];

function searchByTitle(search) {
    fetch(`https://openlibrary.org/search.json?q=${search}`)
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < 4; i++) {
            document.getElementById("container").innerHTML += `
                <div class="card mb-3 w-75 m-auto">
                    <div class="row g-0">
                        <div class="col-md-8">
                            <div class="card-body text-start">
                                <h5 class="card-title">${data.docs[i].title}</h5>
                                <h6 class="card-subtitle mb-2 text-body-secondary">${data.docs[i].author_name}</h6>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="card-body text-end mt-2">
                                <a class="card-link" href="https://openlibrary.org/${data.docs[i].seed[0]}" target="_blank">Learn More</p>
                            </div>
                        </div>
                    </div>
                </div>
            `;
        };
    });
};

document.addEventListener("DOMContentLoaded", ()=>{

    document.getElementById("inputButton").addEventListener("click", ()=>{
        let encodeSearch = encodeURIComponent(document.getElementById("search").value);
        searchByTitle(encodeSearch);
        titleSearchedList = [];
        document.getElementById("container").innerHTML = "";
    });
});