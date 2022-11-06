"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateManyAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateManyMutationInput_1 = require("../../../inputs/AggregateRatingUpdateManyMutationInput");
const AggregateRatingWhereInput_1 = require("../../../inputs/AggregateRatingWhereInput");
let UpdateManyAggregateRatingArgs = class UpdateManyAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateManyMutationInput_1.AggregateRatingUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateManyMutationInput_1.AggregateRatingUpdateManyMutationInput)
], UpdateManyAggregateRatingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereInput_1.AggregateRatingWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereInput_1.AggregateRatingWhereInput)
], UpdateManyAggregateRatingArgs.prototype, "where", void 0);
UpdateManyAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateManyAggregateRatingArgs);
exports.UpdateManyAggregateRatingArgs = UpdateManyAggregateRatingArgs;
