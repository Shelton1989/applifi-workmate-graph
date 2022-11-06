"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyAggregateRatingArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const AggregateRatingCreateManyInput_1 = require("../../../inputs/AggregateRatingCreateManyInput");
let CreateManyAggregateRatingArgs = class CreateManyAggregateRatingArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [AggregateRatingCreateManyInput_1.AggregateRatingCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyAggregateRatingArgs.prototype, "data", void 0);
CreateManyAggregateRatingArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyAggregateRatingArgs);
exports.CreateManyAggregateRatingArgs = CreateManyAggregateRatingArgs;
