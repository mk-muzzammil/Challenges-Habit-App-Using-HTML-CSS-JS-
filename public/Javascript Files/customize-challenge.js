let saveButton = document.getElementById("saveButton");


let postChallenge = async (e) => {
    e.preventDefault();

    const profilePic = document.getElementById('imageInput').files[0];
    console.log(profilePic);
    let challengeTitle = document.getElementById('titleInput').value;
    let challengeDescription = document.getElementById('descriptionInput').value;
    let day_01 = document.getElementById('day1Input').value;
    let day_02 = document.getElementById('day2Input').value;
    let day_03 = document.getElementById('day3Input').value;
    let day_04 = document.getElementById('day4Input').value;
    let day_05 = document.getElementById('day5Input').value;
    let day_06 = document.getElementById('day6Input').value;
    let day_07 = document.getElementById('day7Input').value;
    let day_08 = document.getElementById('day8Input').value;
    let day_09 = document.getElementById('day9Input').value;
    let day_10 = document.getElementById('day10Input').value;
    let day_11 = document.getElementById('day11Input').value;
    let day_12 = document.getElementById('day12Input').value;
    let day_13 = document.getElementById('day13Input').value;
    let day_14 = document.getElementById('day14Input').value;
    let day_15 = document.getElementById('day15Input').value;
    let day_16 = document.getElementById('day16Input').value;
    let day_17 = document.getElementById('day17Input').value;
    let day_18 = document.getElementById('day18Input').value;

    // Create a FormData object to handle the file
    const formData = new FormData();
    formData.append('profilePic', profilePic);
    formData.append('Challenge Title', challengeTitle);
    formData.append('Challenge Description', challengeDescription);

    formData.append('Day 1', day_01);
    formData.append('Day 2', day_02);
    formData.append('Day 3', day_03);
    formData.append('Day 4', day_04);
    formData.append('Day 5', day_05);
    formData.append('Day 6', day_06);
    formData.append('Day 7', day_07);
    formData.append('Day 8', day_08);
    formData.append('Day 9', day_09);
    formData.append('Day 10', day_10);
    formData.append('Day 11', day_11);
    formData.append('Day 12', day_12);
    formData.append('Day 13', day_13);
    formData.append('Day 14', day_14);
    formData.append('Day 15', day_15);
    formData.append('Day 16', day_16);
    formData.append('Day 17', day_17);
    formData.append('Day 18', day_18);


    // Convert FormData to JSON
    const jsonObject = {};
    formData.forEach((value, key) => {
        jsonObject[key] = value;
    });

    // fetch('/upload-challenges', {
    //     method: 'POST',
    //     body: jsonObject,
    // })
    //     .then(response => response.json())

    //     .then(data => {
    //         console.log('File uploaded successfully:', data);
    //     })

    //     .catch(error => {
    //         console.error('Error uploading file:', error);
    //     });



    // try {
    //     const response = await axios.post('/upload-challenges', jsonObject);

    //     if (response.ok) {
    //         alert('Challenges uploaded successfully!');
    //     } else {

    //         alert('Error uploading challenges');
    //     }
    // } catch (error) {
    //     console.log("Failed request");
    //     console.error('Error:', error);
    // }


}


saveButton.addEventListener("click", postChallenge)

