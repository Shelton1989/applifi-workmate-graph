"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingUpdateInput_1 = require("../../../inputs/AggregateRatingUpdateInput");
const AggregateRatingWhereUniqueInput_1 = require("../../../inputs/AggregateRatingWhereUniqueInput");
let UpdateAggregateRatingArgs = class UpdateAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingUpdateInput_1.AggregateRatingUpdateInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingUpdateInput_1.AggregateRatingUpdateInput)
], UpdateAggregateRatingArgs.prototype, "data", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", AggregateRatingWhereUniqueInput_1.AggregateRatingWhereUniqueInput)
], UpdateAggregateRatingArgs.prototype, "where", void 0);
UpdateAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], UpdateAggregateRatingArgs);
exports.UpdateAggregateRatingArgs = UpdateAggregateRatingArgs;
