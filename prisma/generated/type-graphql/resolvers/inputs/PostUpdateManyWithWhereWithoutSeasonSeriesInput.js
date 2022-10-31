"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostUpdateManyWithWhereWithoutSeasonSeriesInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PostScalarWhereInput_1 = require("../inputs/PostScalarWhereInput");
const PostUpdateManyMutationInput_1 = require("../inputs/PostUpdateManyMutationInput");
let PostUpdateManyWithWhereWithoutSeasonSeriesInput = class PostUpdateManyWithWhereWithoutSeasonSeriesInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostScalarWhereInput_1.PostScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostScalarWhereInput_1.PostScalarWhereInput)
], PostUpdateManyWithWhereWithoutSeasonSeriesInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PostUpdateManyMutationInput_1.PostUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PostUpdateManyMutationInput_1.PostUpdateManyMutationInput)
], PostUpdateManyWithWhereWithoutSeasonSeriesInput.prototype, "data", void 0);
PostUpdateManyWithWhereWithoutSeasonSeriesInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PostUpdateManyWithWhereWithoutSeasonSeriesInput", {
        isAbstract: true
    })
], PostUpdateManyWithWhereWithoutSeasonSeriesInput);
exports.PostUpdateManyWithWhereWithoutSeasonSeriesInput = PostUpdateManyWithWhereWithoutSeasonSeriesInput;
