import React from "react";
import PostAuthor from "../components/PostAuthor";
import { Link } from "react-router-dom";
import Thumbnail from "../images/catering.jpg";

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className="container post-detail__container">
        <div className="post-detail__header">
          <PostAuthor />
          <div className="post-detail__buttons">
            <Link to={"/posts/werwer/edit"} className="btn sm primary">
              Edit
            </Link>
            <Link to={"/posts/werwer/delete"} className="btn sm danger">
              Delete
            </Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio
          dignissimos amet excepturi atque debitis soluta obcaecati sit
          necessitatibus magnam at vel deserunt placeat veritatis ea tenetur
          natus fugit, delectus dolor qui asperiores, impedit suscipit iusto
          sint! Labore ipsa est nesciunt?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          esse dolores temporibus aperiam tempore corrupti soluta illo, ipsam
          similique molestiae quasi hic quidem quaerat quam minima explicabo,
          modi maiores amet iure rem. Incidunt, voluptas hic minima commodi
          facere laborum quidem! Itaque incidunt qui blanditiis ea? Cupiditate,
          cumque doloremque temporibus laboriosam in quia ratione natus odio?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quas
          reprehenderit ex eius ipsam mollitia blanditiis numquam, id facilis
          autem voluptatem ipsum reiciendis eveniet. In reiciendis consequuntur,
          velit accusamus laudantium aspernatur labore quisquam excepturi ipsam?
          Fugiat commodi provident iste, ad laboriosam cumque perferendis,
          quidem architecto amet alias assumenda, distinctio esse? Neque
          dignissimos vero molestiae maiores atque laboriosam modi animi illo
          enim, et sequi nisi similique ex quibusdam iusto rem molestias dolores
          sunt dolorem! Corporis ipsa esse provident quidem dolore vero nobis
          architecto fugiat quis natus at repellendus deserunt quae laborum in,
          suscipit eum deleniti quaerat quasi inventore placeat ullam
          repudiandae. Itaque consequuntur quo unde dolore, omnis delectus culpa
          odio? Voluptate, quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
          unde exercitationem? Facilis vel distinctio amet a repellendus odit
          iusto aspernatur!
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique
          cupiditate ducimus, ipsum ipsam sequi vitae officia, esse et quo
          perspiciatis aliquid, odio possimus eveniet est adipisci corrupti
          nobis excepturi. Vero esse veritatis soluta, nihil sunt aut cumque
          illum illo? Earum voluptatem repudiandae quo. Itaque, nam? Voluptas
          nostrum quaerat facere iusto dolores minus deserunt velit fuga, iste
          perferendis similique eum commodi modi itaque praesentium officiis
          perspiciatis esse qui unde recusandae, repudiandae pariatur! Voluptas
          at iusto neque sunt iste ipsam temporibus reprehenderit minus totam
          distinctio possimus consequuntur numquam impedit quis, aliquid quos,
          amet veniam placeat magni! Harum, quo cupiditate libero aliquam
          corporis excepturi natus voluptatibus, corrupti perferendis laudantium
          blanditiis optio quibusdam est laboriosam enim nobis. Vitae voluptatem
          delectus quidem vero blanditiis numquam. Repellat ducimus adipisci
          quasi minus, consequuntur perferendis debitis possimus rem quia quos
          iste nisi dolores, vero quod error ut rerum modi nobis hic
          voluptatibus iure nulla. Harum minima beatae dicta perferendis, ipsa
          ratione temporibus quas quasi dolore doloremque saepe atque cupiditate
          veritatis animi consequuntur, fuga incidunt, enim dolor eos voluptatum
          labore. Facilis placeat nobis aspernatur adipisci in tempore delectus
          ipsum, amet possimus sed animi dolorem alias rerum atque quisquam,
          blanditiis, enim veritatis explicabo. Quia recusandae excepturi soluta
          inventore sint voluptatum!
        </p>
      </div>
    </section>
  );
};

export default PostDetail;
