"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingWhereUniqueInput_1 = require("../../../inputs/AggregateRatingWhereUniqueInput");
let DeleteAggregateRatingArgs = class DeleteAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], DeleteAggregateRatingArgs.prototype, "where", void 0);
DeleteAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteAggregateRatingArgs);
exports.DeleteAggregateRatingArgs = DeleteAggregateRatingArgs;
