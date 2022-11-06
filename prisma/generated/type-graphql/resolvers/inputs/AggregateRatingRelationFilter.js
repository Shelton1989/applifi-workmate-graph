"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateRatingRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingWhereInput_1 = require("../inputs/AggregateRatingWhereInput");
let AggregateRatingRelationFilter = class AggregateRatingRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], AggregateRatingRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], AggregateRatingRelationFilter.prototype, "isNot", void 0);
AggregateRatingRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("AggregateRatingRelationFilter", {
        isAbstract: true
    })
], AggregateRatingRelationFilter);
exports.AggregateRatingRelationFilter = AggregateRatingRelationFilter;
