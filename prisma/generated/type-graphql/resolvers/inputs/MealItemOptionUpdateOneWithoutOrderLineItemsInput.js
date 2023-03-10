"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOptionUpdateOneWithoutOrderLineItemsInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateOrConnectWithoutOrderLineItemsInput");
const MealItemOptionCreateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionCreateWithoutOrderLineItemsInput");
const MealItemOptionUpdateWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpdateWithoutOrderLineItemsInput");
const MealItemOptionUpsertWithoutOrderLineItemsInput_1 = require("../inputs/MealItemOptionUpsertWithoutOrderLineItemsInput");
const MealItemOptionWhereUniqueInput_1 = require("../inputs/MealItemOptionWhereUniqueInput");
let MealItemOptionUpdateOneWithoutOrderLineItemsInput = class MealItemOptionUpdateOneWithoutOrderLineItemsInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateWithoutOrderLineItemsInput_1.MealItemOptionCreateWithoutOrderLineItemsInput)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCreateOrConnectWithoutOrderLineItemsInput_1.MealItemOptionCreateOrConnectWithoutOrderLineItemsInput)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpsertWithoutOrderLineItemsInput_1.MealItemOptionUpsertWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpsertWithoutOrderLineItemsInput_1.MealItemOptionUpsertWithoutOrderLineItemsInput)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "upsert", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "disconnect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Boolean, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Boolean)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "delete", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionWhereUniqueInput_1.MealItemOptionWhereUniqueInput)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "connect", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionUpdateWithoutOrderLineItemsInput_1.MealItemOptionUpdateWithoutOrderLineItemsInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionUpdateWithoutOrderLineItemsInput_1.MealItemOptionUpdateWithoutOrderLineItemsInput)
], MealItemOptionUpdateOneWithoutOrderLineItemsInput.prototype, "update", void 0);
MealItemOptionUpdateOneWithoutOrderLineItemsInput = tslib_1.__decorate([
    TypeGraphQL.InputType("MealItemOptionUpdateOneWithoutOrderLineItemsInput", {
        isAbstract: true
    })
], MealItemOptionUpdateOneWithoutOrderLineItemsInput);
exports.MealItemOptionUpdateOneWithoutOrderLineItemsInput = MealItemOptionUpdateOneWithoutOrderLineItemsInput;
