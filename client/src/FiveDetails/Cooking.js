import { Component } from "react";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";
import { db } from "../Firebase/Auth";
import { onSnapshot, collection } from "firebase/firestore";
import { doc, updateDoc, deleteField } from "firebase/firestore";


function Cooking() {
    const tutorial = [
        { Name: 'Chicken Wrap Recipe', photo: "  https://scontent.fgza4-1.fna.fbcdn.net/v/t1.15752-9/290310062_1048290976061741_1981032299376509278_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nogzP9jkn30AX_soLIZ&_nc_ht=scontent.fgza4-1.fna&oh=03_AVIbsy_HmhK19oCSLkVVyBLFSUR0yzW22XLPyxW-4hrBwg&oe=62DC312A ", Details: "Chicken wrap is the perfect meal when you are hungry but not in the mood to cook. This dish is comforting, delicious and easy to make. The beaty grilled chicken wraps is that you can add almost any topping that you like or have at the moment. You can make chicken wrap ahead of time and just grill it before serving.", Video: "https://youtu.be/iUYl4tJO68s" },
        { Name: 'The Best Burger Recipe', photo: "  https://scontent.xx.fbcdn.net/v/t1.15752-9/289970935_562296445453846_1315286380585835297_n.png?_nc_cat=105&ccb=1-7&_nc_sid=aee45a&_nc_ohc=TkNrszQ1_rIAX9xhgJL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKqSPybOAK25QInb30NMi0UFXupWMW5wRc9Apv4A65Cdw&oe=62DDD681 ", Details: "Burger is probably one of the most popular foods in the world, but most of the people eat hamburgers only in restaurants and not making burgers at home. With this easy recipe, you will learn how to make the best burger at home. This recipe makes juicy and delicious beef burger and also you learn how to make the best burger sauce. Now, next time you crave a cheeseburger, try this recipe.", Video: "https://youtu.be/BIG1h2vG-Qg" },
        { Name: 'One Pan Chicken on a Stovetop ', photo: "  https://scontent.xx.fbcdn.net/v/t1.15752-9/289734134_1991677091017216_3810300669869040148_n.png?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=0Il1agwr5jUAX-9w0JL&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJXIgBPbo2biqA2zCMx9pKiKqn6V_QquSafgZdctN6ogA&oe=62DC4680 ", Details: " This one pan chicken with honey garlic sauce is one of the surprizing dishes I've made recently. This skillet chicken is tender, juicy and packed with flavours. A whole meal in one pan; proteins, carbs, fats and veggies. This easy one pan chicken on a stovetop is the perfect meal for midweek dinner or even for holidays. ", Video: "https://youtu.be/n4K1pBmlLqY" },
        { Name: 'Easy Oatmeal Cookies Recipe', photo: " https://scontent.xx.fbcdn.net/v/t1.15752-9/289538016_537628278110282_6030728335306961879_n.png?_nc_cat=104&ccb=1-7&_nc_sid=aee45a&_nc_ohc=XaNJ43PWClgAX-QUftT&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJ1JAnTf1Tyu8DqjdrLcSz3QqrOu9lCpcQ31FfGsfc-Kg&oe=62DC734C  ", Details: "These oatmeal cookies are so easy to make, that you can prepare them even with your kids. These cookies are eggless, dairy free and basically VEGAN! And as a bonus you can add to them any additions that you like, such as; nuts, dried fruits and more. So, if you are looking for an easy cookie recipe, this recipe is the easiest and tastiest you can find.", Video: "https://youtu.be/ewUt1daALZA" },
        { Name: 'Bubble Tea Recipe (Boba Tea)', photo: " https://scontent.xx.fbcdn.net/v/t1.15752-9/289584773_1533763293705365_3693252793960020474_n.png?_nc_cat=103&ccb=1-7&_nc_sid=aee45a&_nc_ohc=GIvwKnaCpmEAX-p5u2O&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVIne1EOmLbGqkAIP7wCjUQ1zpHCw3P5ESB4sGIJmEToMA&oe=62DBB606  ", Details: "Bubble tea or boba tea (also known as pearl tea) is a Taiwanese tea that has become very popular all around the world in the past few years. Bubble tea is made of tapioca pearls, syrup, tea of your choice and milk. Follow this recipe to learn how to make boba tea from scratch including homemade tapioca pearls recipe for bubble tea.", Video: "https://youtu.be/mTo9Fstxhoo" },
        { Name: 'Oreo Cupcakes Recipe', photo: "  https://scontent.xx.fbcdn.net/v/t1.15752-9/289457005_449158317024515_760371711658767698_n.png?_nc_cat=108&ccb=1-7&_nc_sid=aee45a&_nc_ohc=Ua5-7XevIgsAX8gGmYj&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKiUKngSbfzS1cjTyQ0yYkM9Eyyxu0rIGKwR5dZ-1iJOQ&oe=62DE4838 ", Details: "If you are an Oreo fan, you will LOVE these cupcakes! Fluffy chocolate cupcakes with Oreo surprise at the bottom and cookies and cream frosting at the top. These cupcakes are especially loved by children but also by adults. Make them for birthdays, parties or holidays and your family will thank you forever.", Video: "https://youtu.be/KmLgDi9FMeM" },
        { Name: '7 Easy Ramadan Desserts', photo: " https://scontent.xx.fbcdn.net/v/t1.15752-9/289728752_588080452656773_2468382509784854018_n.png?_nc_cat=107&ccb=1-7&_nc_sid=aee45a&_nc_ohc=ZPUyNA1WKIoAX9W9vRe&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVJoTyabupNn3tzPOqEi0o5uow8LV2DcQBH1gBWXKbvoUQ&oe=62DC145D ", Details: "7 easy ramadan dessert recipes, if you are looking for ramadan dessert recipes ideas, you have come to the right place. Here I gathered 7 easy dessert recipes for iftar, some of them are traditional ramadan recipes and some of them modern dessert recipes that many people prefer. These ramadan sweets and treats are must try recipes during the fasting month.", Video: "https://youtu.be/D-BbX-E8fDQ" },
        { Name: '8 Healthy Sandwiches and Wraps ', photo: "https://scontent.xx.fbcdn.net/v/t1.15752-9/290012611_1845429572490353_9160191563652008798_n.png?_nc_cat=109&ccb=1-7&_nc_sid=aee45a&_nc_ohc=2R03jhPI3IQAX-xpTP7&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AVKOsiV9AmTfuPfJaTUHy9SEbLcPXnDW7GhXJaHodllQsQ&oe=62DC0987  ", Details: " 8 healthy sandwich and wrap recipe that you cake make in a few minutes of work. Perfect meal for school, work, picnics and trips. If you are looking for healthy sandwich recipes to make for your kinds and family, these are the ideal solution. ", Video: "https://youtu.be/d2-6_kcTODM" }
    ];
    const [recipes, setRecipes] = React.useState([]);
    React.useEffect(
      () =>
        onSnapshot(collection(db, "CookingTutorial"), (snapshot) =>
          setRecipes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
        ),
      []
    );
    return (
        <div>
            <h1 className="Header">Cooking Tutorial</h1>
            <hr></hr>
            {recipes.map((it) => {
                return (
                    <div className='UniDiv' >
                        <img src={it.photo} className="image"></img>
                        <h2 className="h3">{it.name} </h2>
                        <Link to={`/cooking/${it.name}`} state={it} className="details">details</Link>
                    </div>
                )
            })}
        </div>
    )

}



export default Cooking;

