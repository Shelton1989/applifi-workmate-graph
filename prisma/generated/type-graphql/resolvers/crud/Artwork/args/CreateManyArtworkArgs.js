"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateManyArtworkArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ArtworkCreateManyInput_1 = require("../../../inputs/ArtworkCreateManyInput");
let CreateManyArtworkArgs = class CreateManyArtworkArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ArtworkCreateManyInput_1.ArtworkCreateManyInput], {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Array)
], CreateManyArtworkArgs.prototype, "data", void 0);
CreateManyArtworkArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], CreateManyArtworkArgs);
exports.CreateManyArtworkArgs = CreateManyArtworkArgs;
