"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let AggregateRatingWhereUniqueInput = class AggregateRatingWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingWhereUniqueInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], AggregateRatingWhereUniqueInput.prototype, "mealId", void 0);
AggregateRatingWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingWhereUniqueInput", {
        isAbstract: true
    })
], AggregateRatingWhereUniqueInput);
exports.AggregateRatingWhereUniqueInput = AggregateRatingWhereUniqueInput;
