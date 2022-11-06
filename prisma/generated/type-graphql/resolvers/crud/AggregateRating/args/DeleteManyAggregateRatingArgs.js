"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingWhereInput_1 = require("../../../inputs/AggregateRatingWhereInput");
let DeleteManyAggregateRatingArgs = class DeleteManyAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], DeleteManyAggregateRatingArgs.prototype, "where", void 0);
DeleteManyAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyAggregateRatingArgs);
exports.DeleteManyAggregateRatingArgs = DeleteManyAggregateRatingArgs;
