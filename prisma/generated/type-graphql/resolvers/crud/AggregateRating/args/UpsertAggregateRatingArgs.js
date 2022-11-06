"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpsertAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateInput_1 = require("../../../inputs/AggregateRatingCreateInput");
const AggregateRatingUpdateInput_1 = require("../../../inputs/AggregateRatingUpdateInput");
const AggregateRatingWhereUniqueInput_1 = require("../../../inputs/AggregateRatingWhereUniqueInput");
let UpsertAggregateRatingArgs = class UpsertAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], UpsertAggregateRatingArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingCreateInput_1.AggregateRatingCreateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingCreateInput_1.AggregateRatingCreateInput)
], UpsertAggregateRatingArgs.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateInput_1.AggregateRatingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateInput_1.AggregateRatingUpdateInput)
], UpsertAggregateRatingArgs.prototype, "update", void 0);
UpsertAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpsertAggregateRatingArgs);
exports.UpsertAggregateRatingArgs = UpsertAggregateRatingArgs;
