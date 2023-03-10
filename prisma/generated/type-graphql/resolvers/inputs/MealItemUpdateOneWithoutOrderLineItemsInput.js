"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemUpdateOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateOrConnectWithoutOrderLineItemsInput");
const MealItemCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemCreateWithoutOrderLineItemsInput");
const MealItemUpdateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpdateWithoutOrderLineItemsInput");
const MealItemUpsertWithoutOrderLineItemsInput_1 = require("../inputs/MealItemUpsertWithoutOrderLineItemsInput");
const MealItemWhereUniqueInput_1 = require("../inputs/MealItemWhereUniqueInput");
let MealItemUpdateOneWithoutOrderLineItemsInput = class MealItemUpdateOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateWithoutOrderLineItemsInput_1.MealItemCreateWithoutOrderLineItemsInput)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemCreateOrConnectWithoutOrderLineItemsInput_1.MealItemCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemCreateOrConnectWithoutOrderLineItemsInput_1.MealItemCreateOrConnectWithoutOrderLineItemsInput)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpsertWithoutOrderLineItemsInput_1.MealItemUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpsertWithoutOrderLineItemsInput_1.MealItemUpsertWithoutOrderLineItemsInput)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemWhereUniqueInput_1.MealItemWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemWhereUniqueInput_1.MealItemWhereUniqueInput)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemUpdateWithoutOrderLineItemsInput_1.MealItemUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemUpdateWithoutOrderLineItemsInput_1.MealItemUpdateWithoutOrderLineItemsInput)
], MealItemUpdateOneWithoutOrderLineItemsInput.prototype, "update", void 0);
MealItemUpdateOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemUpdateOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemUpdateOneWithoutOrderLineItemsInput);
exports.MealItemUpdateOneWithoutOrderLineItemsInput = MealItemUpdateOneWithoutOrderLineItemsInput;
