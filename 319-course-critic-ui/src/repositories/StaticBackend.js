import { ReviewRepo } from "./ReviewRepo";

export class StaticBackend{
    constructor() {
        let Username = "CourseCriticUsername";
        let Password = "CourseCriticPasswrod";
        let Email = "CourseCritic@gmail.com";
    }

    static addReview(title, difficultyScore, enjoyment, grade, description, classID){
        let newReview = {
            title: title,
            difficultyScore: difficultyScore,
            enjoyment: enjoyment,
            grade: grade,
            description: description,
            classID: classID 
        }
    
        ReviewRepo.push(newReview);
        sessionStorage.setItem("ReviewRepo", JSON.stringify(ReviewRepo));
    }
    
    static getClassScore = () => {
        ReviewRepo = sessionStorage.getItem("ReviewRepo");
    }
    
    static logReviewRepo() {
        sessionStorage.getItem("ReviewRepo");
        console.log(JSON.stringify(ReviewRepo));
    }
}
