"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MealItemOption = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const MealItemOptionCount_1 = require("../resolvers/outputs/MealItemOptionCount");
let MealItemOption = class MealItemOption {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOption.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOption.prototype, "mealItemId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOption.prototype, "title", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", String)
], MealItemOption.prototype, "shortDescription", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOption.prototype, "createdAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => Date, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Date)
], MealItemOption.prototype, "updatedAt", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => MealItemOptionCount_1.MealItemOptionCount, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", MealItemOptionCount_1.MealItemOptionCount)
], MealItemOption.prototype, "_count", void 0);
MealItemOption = tslib_1.__decorate([
    TypeGraphQL.ObjectType("MealItemOption", {
        isAbstract: true
    })
], MealItemOption);
exports.MealItemOption = MealItemOption;
