"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AggregateAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingOrderByWithRelationInput_1 = require("../../../inputs/AggregateRatingOrderByWithRelationInput");
const AggregateRatingWhereInput_1 = require("../../../inputs/AggregateRatingWhereInput");
const AggregateRatingWhereUniqueInput_1 = require("../../../inputs/AggregateRatingWhereUniqueInput");
let AggregateAggregateRatingArgs = class AggregateAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], AggregateAggregateRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingOrderByWithRelationInput_1.AggregateRatingOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], AggregateAggregateRatingArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], AggregateAggregateRatingArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAggregateRatingArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], AggregateAggregateRatingArgs.prototype, "skip", void 0);
AggregateAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], AggregateAggregateRatingArgs);
exports.AggregateAggregateRatingArgs = AggregateAggregateRatingArgs;
