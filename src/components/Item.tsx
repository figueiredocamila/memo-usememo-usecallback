import { memo } from "react";

type ItemProps = {
    title: string;
    onAddItemToWishList: (item: string) => void;
    countItemsWithOne: number;
}

function ItemComponent(props: ItemProps) {
    return (
        <li>
            {props.title} - {props.countItemsWithOne}
            <button onClick={() => props.onAddItemToWishList(props.title)}>
                Add to wishlist
            </button>
        </li>
    )
}

export const Item = memo(ItemComponent);

